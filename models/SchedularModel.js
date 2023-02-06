class SchedularModel{

    constructor({secound, minute , hour, days , month , year }){
        this.secound=secound;
        this.minute=minute;
        this.hour=hour;
        this.days=days;
        this.month=month;
        this.year=year;
        
    }

     cronFuncitonCommondGenerator(){
        var commond ="";

        if(secound==-1){
            commond =commond.concat("* "); 

        }else{
            this.secound.sort();
            var sec="";
            for(var i =0;i<this.secound.length;i++){
                sec= sec.concat(this.secound[i]);
                sec=sec.concat(",");
            }

            sec = sec.substring(0, string.length-1);

            commond= commond.concat(sec);
            commond= commond.concat(" ");

        }


        if(this.minute==-1){
            commond=commond.concat("* ");


        }else{


            this.minute.sort();
            var sec="";
            for(var i =0;i<this.minute.length;i++){
                sec= sec.concat(this.minute[i]);
                sec=sec.concat(",");
            }

            sec = sec.substring(0, string.length-1);

            commond= commond.concat(sec);
            commond=commond.concat(" ");
            

        }

        commond=commond.concat("* * * *");


        return commond;

     }

}

module.exports= SchedularModel;
