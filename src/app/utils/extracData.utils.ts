export class ExtracDataUtils{

  public extrac(document){
    var all = document.getElementsByClassName("data");
    var data={};
    for (var i=0, max=all.length; i < max; i++) {
      data[all[i]["name"]]=all[i]["value"];
    }
    return data;
  }


}
