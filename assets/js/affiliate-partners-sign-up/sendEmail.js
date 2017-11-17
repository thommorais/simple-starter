
class SendContact{

    constructor(){

        this.contactForm = the('#contact-us-form')
        this.messageOk = the('.message-ok')
        this.name = this.contactForm.querySelector('#contact-name')
        this.email = this.contactForm.querySelector('#contact-email')
        this.message = this.contactForm.querySelector('#contact-message')
        this.errors = []

        this.emailRX =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        this.init()

        //this.emailError = this.createErrorMessage('Please provide a valid email', 'email')
    }

    createErrorMessage(text, indentifier){
        const span = document.createElement('span')
              span.classList.add('error-message')
              span.id = indentifier
              span.innerText = text

        return span
    }

    init(){

        this.contactForm.onsubmit = e => {
            e.preventDefault()
            this.validate()
        }

        for(event of ["change", "keyup", "paste"]) {
            this.email.addEventListener(event, this.validateEmail.bind(this))
            this.name.addEventListener(event, ()=> this.validateString(this.name, 'name') )
            this.message.addEventListener(event,  this.validateMessage.bind(this) )
        }

        this.modal = new Modals()
        this.modal.subscribe(this.renew.bind(this) )
    }

    removeFromArray(string){

        for (let i= this.errors.length-1; i >= 0; i--) {
            if (this.errors[i] === string) {
                this.errors.splice(i, 1)
            }
        }
    }

    addToArray(string){
        this.removeFromArray(string)
        this.errors.push(string)
    }

    validateEmail(){

        if(!this.emailRX.test(this.email.value)){
            this.addToArray('email')
        }else{
            this.removeFromArray('email')
            this.email.classList.remove('error')
        }
    }

    validateString(input, name){

        if(input.value.length < 3 ){
            this.addToArray(name)
        }else{
            this.removeFromArray(name)
            input.classList.remove('error')
        }

    }

    validateMessage(){
        if(this.message.value.length < 5){
            this.addToArray('message')
        }else{
            this.message.classList.remove('error')
            this.removeFromArray('message')
        }
    }

    validate(){

        this.validateEmail()
        this.validateString(this.name, 'name')
        this.validateMessage()

        if(!this.errors.length){
            this.sending()
            this.loading()
        }else{
            this.printErrors()
            throw `Could not send because some fields were not filled`
        }

    }

    printErrors(){
        this.errors.forEach(error => this[error].classList.add('error'))
        this.errors = []
    }

    loading(){
        this.button = document.querySelector('[type="submit"]')
        this.contactForm.classList.add('sending')
        this.button.innerText = 'wait'
    }

    renew(){
        this.messageOk.classList.add('hide')
        this.contactForm.classList.remove('hide')
        this.contactForm.classList.remove('sending')
        this.contactForm.reset()
        this.button.innerText = 'send'

    }

    showCongratulations(){
        this.messageOk.classList.remove('hide')
        this.contactForm.classList.add('hide')
    }

    resolution(json){

        if(!json.error && json.status === 200){
            this.showCongratulations()
        }else if(json.errors === 500){
            this.showErrorMsg()
        }
    }

    sending(){

        this.loading()

        fetch('https://referral-dot-bluestacks-cloud.appspot.com/affiliate_referral/2b/api/v1/contact_us', {
        method: 'POST',
            body: JSON.stringify({
              'email': this.email.value,
              'name': this.name.value,
              'message': this.message.value
            }),
        })
        .then( request => request.json() )
        .then( json => this.resolution(json))

    }

}
