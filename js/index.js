
 class jq {
    constructor(tagname){
        this.obj = document.querySelector(tagname)
    }


    print(){
        console.log(this.obj);
        return this.obj
    }

    onClick(fun){
        console.log('kek');
        const obj = this.obj;
        obj.addEventListener("click",fun )
    }
    changeColor(colorName){
        this.obj.style.color = colorName
    }






}

const kek = new jq('h1');
kek.print();
kek.onClick(()=>kek.changeColor('blue'));