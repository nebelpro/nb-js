


export  default  {
    required: function(value) {
        return !!value;
    },
    chinese:/^[\u4E00-\u9FA3]{1,}$/,
    chinamobile:/^((13[0-9])|(17[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(20[0-9]))\d{8}$/,
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    number: /^\d+$/,
    float:/^\d+(\.\d+)?$/,
    minlength: function(value,minlen) {
        return value.length >= minlen;
    },
    maxlength: function(value,maxlen) {
        return value.length <= maxlen;
    },
    equal:function(value,value2) {
        return value==value2;
    }
};
