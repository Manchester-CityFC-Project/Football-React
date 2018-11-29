import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import FormFiled from '../../ui/formFields';
import {validate} from '../../ui/misc'
import {firebasePromotion} from '../../../firebase'

class Enroll extends Component {

    state = {
        formError:false,
        formSuccess:'',
        formData:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter Your Email'

                },

                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                validationMessage:''

            } 
        }

    }

    updateForm = (element) => {
       const newFormdata= {...this.state.formData}
       const newElement= {...newFormdata[element.id]}

       newElement.value=element.event.target.value;
      let validData = validate(newElement);
       newElement.valid=validData[0];
       newElement.validationMessage=validData[1];

       newFormdata[element.id]=newElement;
    
       console.log(newFormdata);
       
       this.setState({
           formError:false,
           formData:newFormdata
       })
       

    }

    resetFormSuccess(type) {
        const newFormdata= {...this.state.formData}

        for(let key in newFormdata) {
            newFormdata[key].value='';
            newFormdata[key].valid='';
            newFormdata[key].validationMessage='';

        }

        this.setState ({
             formError:false,
             formData:newFormdata,
             formSuccess: type ?'Congrattulations':'Already on the database'

        })

         this.successMsgClear();
    }
    successMsgClear(){
        setTimeout(() => {
             this.setState({
                  formSuccess:'' 
             })
        },1000)
    }







    submitForm = (event) => {
    
        event.preventDefault();
        let dataToSubmit ={};
        let formIsValid=true;

        for(let key in this.state.formData) {
            dataToSubmit[key]=this.state.formData[key].value;
            formIsValid=this.state.formData[key].valid && formIsValid;
        }
    
        if(formIsValid) {
          
            firebasePromotion.orderByChild('email').equalTo(dataToSubmit.email).once("value")
            .then((snapShot) => {
                if(snapShot.val() === null) {
                    firebasePromotion.push(dataToSubmit)
                    this.resetFormSuccess(true);
                }
                else {
                    
            this.resetFormSuccess(false);
                }
                 
            })


        }
        else {
            this.setState ( {
                 formError:true,
                 
            })
        }

    }







       render () {
            return (
                 <Fade>
            <div className="enroll_wrapper">
            <form onSubmit={(event) => this.submitForm(event)}>
             <div className="enroll_title">
             Enter Your Email 
             </div>
              <div className="enroll_input">
                  <FormFiled
                  id={'email'}
                  formData={this.state.formData.email}
                  change={(element) => this.updateForm(element)}
                  />
                  {this.state.formError ?<div className="error_label">
                  Something went wrong

                  </div>:null}

                 <div classsName="success_label" 
                 style={{  color: '#98c5e9',
                          margin: '10px 0px',
                          fontWeight: '600'
                          }}>
    {this.state.formSuccess}</div>
                  <button onClick={(event) => this.submitForm(event)}>Enroll</button>
              </div>

            </form>
            </div>
                </Fade>
            )
       }
}

export default Enroll