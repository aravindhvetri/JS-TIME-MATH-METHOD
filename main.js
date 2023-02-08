 //find time to season:
 
 let date = new Date();
 let time = date.getHours();
 if(time <= 12){
	 console.log("MORNING");
 }
 else if(time <= 15){
	 console.log("AFTERNOON");
 }
 else if(time <= 18){
	 console.log("EVENING");
 }
 else if(time <= 23){
	 console.log("NIGHT");
 }
 else{
	 console.log("");
 }
  
  

