class Modals{

    constructor(){
        this.triggers = document.querySelectorAll('[data-modal]')
        this.modals = []
        this.observers = []
        this._bind()

        this.clickout = e => this._clickout('teste')
    }

    _bind(){

        this.getModals()

        this.triggers.forEach(trigger => {

            trigger.addEventListener('click', evt => {
                evt.preventDefault()
                this.toggleModals(trigger)
            })

        })

    }

    getModals(){
        this.triggers.forEach(trigger => {
            const modalId = trigger.dataset.modal
            const el = the(`#${modalId}`)
            const box = el.querySelector('.box')
            this.modals.push({el, modalId, box, open: false})
        })
    }

    toggleModals(trigger){

        const modalId = trigger.dataset.modal
        const foundModal = this.modals.find(modal => modal.modalId === modalId) || false

        if(!foundModal.open){
            this.open(foundModal)
        }else{
            this.close(foundModal)
        }

    }

    open(modal){
        modal.open = true
        modal.el.classList.add('open')
        modal.el.addEventListener('click', this.clickout.bind(this))
    }

    close(modal){
        modal.open = false
        modal.el.classList.remove('open')
        modal.el.removeEventListener('click', this.clickout.bind(this))
        this.notify()
    }

    notify(){
        this.observers.forEach(observer => observer())
    }

    subscribe(f) {
       this.observers.push(f)
     }


    _clickout(e){

        const foundModal = this.modals.find(modal => modal.open) || false

        if(!foundModal) return

        const isClickInside = foundModal.box.contains(event.target)

        if (!isClickInside) {
            this.close(foundModal)
        }

    }

}
