/* jshint unused:false*/

+ function($) {
    "use strict";



    var createDefault=function(isEnd){
        var today = new Date();
        var years = today.getFullYear();


        var formatNumber = function (n) {
            return n < 10 ? "0" + n : n;
        };

        var initMonthes = ('01 02 03 04 05 06 07 08 09 10 11 12').split(' ');

        var initYears = (function () {
            var arr = [];
            if(isEnd){
                arr.push("至今");
            }
            for (var i = years; i >=1960; i--) { arr.push(i); }
            return arr;
        })();


        var defaults = {

            rotateEffect: false,  //为了性能

            value: [today.getFullYear(), formatNumber(today.getMonth()+1)],

            onChange: function (picker, values, displayValues) {

                /* if(values[0]=="至今"){
                 picker.cols[1].values=[];
                 }else{
                 picker.cols[1].values= initMonthes;
                 }
                 */

            },

            formatValue: function (p, values, displayValues) {

                if(values[0]=="至今"){
                    return "至今";
                }else{
                    return displayValues[0] + '-' + values[1];
                }




            },

            cols: [
                // Years
                {
                    values: initYears
                },
                // Months
                {
                    values: initMonthes
                }


            ]
        };

        return defaults;

    }



    $.fn.datepickerYearMonth = function(params) {
        return this.each(function() {
            if(!this) return;
            var defaults = createDefault(params.isEnd);
            var p = $.extend(defaults, params);
            $(this).picker(p);
            if (params.value) $(this).val(p.formatValue(p, p.value, p.value));
        });
    };

}(Zepto);