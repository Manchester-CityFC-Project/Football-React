import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import FormFiled from '../../ui/formFields';

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
                  />
              </div>

            </form>
            </div>
                </Fade>
            )
       }
}

export default Enroll