$(document).ready(function () {
    headers = [];    
    $('table.table-stack-on-mobile').each(function (i) {
        headers[i] = [];        
        currentslot = 0; 
        $(this).find('thead tr').each(function (k) {
            if (k < 1) {
                $(this).find('> *').each(function (l) {
                    thisth = $(this).text();
                    var colspanattr = $(this).attr('colspan');
                    if (typeof colspanattr !== typeof undefined && colspanattr !== false) {
                        for (m = 0; m < colspanattr; m++) {
                            headers[i].push(thisth);
                        }
                    } else {
                        headers[i].push(thisth);
                    }
                });
            } else {
                $(this).find('> *').each(function (l) {
                    thisth = $(this).text();
                    var colspanattr = $(this).attr('colspan');
                    if (typeof colspanattr !== typeof undefined && colspanattr !== false) {
                        for (m = 0; m < colspanattr; m++) {
                            headers[i][currentslot] = headers[i][currentslot] + "<br>" + thisth;
                            currentslot = currentslot + 1;
                        }
                    } else {
                        headers[i][currentslot] = headers[i][currentslot] + "<br>" +thisth;
                        currentslot = currentslot + 1;
                    }
                });
            }
        });

        //get styles and add header information back in
        
        $(this).find("tbody tr").each(function(){
            $(this).find("> *").each(function(k){                    
            var tdtextcolor = $(this).closest("table").find("th").css("color");
            var tdbgcolor = $(this).closest("table").find("th").css("background-color");
            var tdfontweight = $(this).closest("table").find("th").css("font-weight");                    
            var empty = headers[i][k];
            if ((k==0 && empty=="") || (k==0 && empty == "<br>")){
            } else {            
            $(this).before($("<td>").html(headers[i][k]).addClass("psuedo-cell").attr("aria-hidden","true").css({"color":tdtextcolor,"background-color":tdbgcolor,"font-weight":tdfontweight}));              
            }
        });            
    });    
    });

    //// add roles so when display: properties change for mobile screen readers still see the table as table
    // if no caption, whatever element the table is labelledy by should have #responsiveTable-label-(n)
    
    $('table.table-responsive').each(function (i) {
        $(this).attr("aria-labelledby", "responsiveTable-" + i);
        $(this).find("caption").attr("id", "responsiveTable-label-" + i);
        $(this).find("td").attr("role", "gridcell");
        $(this).find("thead").find("th").attr("role", "columnheader");
        $(this).find("tbody").find("th").attr("role", "rowheader");
        $(this).find("tr").attr("role", "row");
        $(this).find("tbody").attr("role", "rowgroup");
        $(this).find("thead").attr("role", "rowgroup");
        $(this).attr("role", "grid");
    });
});