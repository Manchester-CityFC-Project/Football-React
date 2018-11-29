import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import FormFiled from '../../ui/formFields';
import {validate} from '../../ui/misc'

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
           formData:newFormdata
       })
       
    }



    submitForm = () => {

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
              </div>

            </form>
            </div>
                </Fade>
            )
       }
}

export default Enroll