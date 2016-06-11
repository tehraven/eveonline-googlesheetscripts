function parseEvePraisalURL(url)
{
   var split = url.split("/e/");
   if(split.length == 2)
     return parseEvePraisalID(split[1]);
}

function parseEvePraisalID(id)
{
   var url = "http://evepraisal.com/e/" + id + ".json";
   var response = UrlFetchApp.fetch(url);
   var dataAll   = JSON.parse(response.getContentText());
   var items = new Array();
   for(i in dataAll.items)
   {
     var thisItem = [dataAll.items[i].name, dataAll.items[i].quantity, dataAll.items[i].typeID, dataAll.items[i].prices.buy.percentile];
     items.push(thisItem);
   }
   return items;
}
