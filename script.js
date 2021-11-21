class Reise {
    constructor(name, date1, date2, country) {
        this.name = name;
        this.date1 = date1;
        this.date2 = date2;
        this.country = country;
        this.value="{"+this.name+", "+this.date1+", "+this.date2+", "+this.country+"}"
    }
    serialize(){
        return JSON.stringify(this);
    }
}

class Liste {
    constructor(name){
        this.liste=new Array();
        this.name=name;
        this.edit=null;
        this.load();
        this.save();
    }

    save(){
        localStorage.setItem(this.name, JSON.stringify(this.liste));
        localStorage.setItem("edit", JSON.stringify(this.edit));
    }

    load(){
        let temp=JSON.parse(localStorage.getItem(this.name));
        let temp2=JSON.parse(localStorage.getItem("edit"));
        if (temp!=null){
            this.liste=temp;
        }
        if (temp2!=null){
            this.edit=temp2;
        }
    }

    editByIndex(index, reise){
        this.load();
        console.log(index,reise);
        this.liste[index]=reise;
        this.save();
    }

    setEdit(index){
        this.load();
        if (index>=0 && index<this.liste.length) {
            this.edit=null
            this.edit=index;
        }
        this.save();
    }

    add(reise){
        this.load();
        this.liste.push(reise);
        this.save();
    }

    delete(reise){
        this.load();
        let i=this.liste.indexOf(reise);
        if (i>0) {
            this.liste.splice(i,1);  
        }
        this.save();
    }
    deleteByIndex(index){
        this.load();
        if (index>=0 && index<this.liste.length) {
            this.liste.splice(index,1);  
        }
        this.save();
    }

    getliste(){
        this.load();
        let temp ="{";
        for (let x of this.liste) {
            temp += x+", ";
        }
        temp+="}";
        return temp
    }
}
let Liste1 = new Liste("liste");