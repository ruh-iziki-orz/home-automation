class SchedularModel{

    constructor({second, minute , hour, days , month , week}){
        this.second=second;
        this.minute=minute;
        this.hour=hour;
        this.days=days;
        this.month=month;
        this.week=week;
    }

     cronFuncitonCommondGenerator(){
        var commond ="";

        if(this.second==-1){
            commond =commond.concat("* "); 

        }else{
            var sec="";
            
            for(var i =0;i<this.second.length;i++){
                sec= sec.concat(this.second[i]);
                if(i+1 != this.second.length)
                sec=sec.concat(",");
            }

            commond= commond.concat(sec);
            commond= commond.concat(" ");

        }

        
        if(this.minute==-1){
            commond=commond.concat("* ");


        }else{

            
            var sec="";
            for(var i =0;i<this.minute.length;i++){
                sec= sec.concat(this.minute[i]);
                if(i+1 != this.minute.length)
                    sec=sec.concat(",");
            }


            commond= commond.concat(sec);
            commond=commond.concat(" ");
        }
        
        if(this.hour==-1){
            commond=commond.concat("* ");


        }else{


            var sec="";
            for(var i =0;i<this.hour.length;i++){
                sec= sec.concat(this.hour[i]);
                if(i+1 != this.hour.length)
                    sec=sec.concat(",");
            }


            commond= commond.concat(sec);
            commond=commond.concat(" ");
        }

        if(this.days==-1){
            commond=commond.concat("* ");


        }else{


            var sec="";
            for(var i =0;i<this.days.length;i++){
                sec= sec.concat(this.days[i]);
                if(i+1 != this.days.length)
                    sec=sec.concat(",");
            }


            commond= commond.concat(sec);
            commond=commond.concat(" ");
        }

        if(this.month==-1){
            commond=commond.concat("* ");


        }else{


            var sec="";
            for(var i =0;i<this.month.length;i++){
                sec= sec.concat(this.month[i]);
                if(i+1 != this.month.length)
                    sec=sec.concat(",");
            }


            commond= commond.concat(sec);
            commond=commond.concat(" ");
        }

        if(this.week==-1){
            commond=commond.concat("*");


        }else{


            var sec="";
            for(var i =0;i<this.week.length;i++){
                sec= sec.concat(this.week[i]);
                if(i+1 != this.week.length)
                    sec=sec.concat(",");
            }


            commond= commond.concat(sec);
            commond=commond.concat(" ");
        }



        
        return commond;

     }

}

module.exports= SchedularModel;
