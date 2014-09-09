function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();
    
    // whole site
    var prod_list = [
    'http://sti13*'
    ];

    var qa_list = [
    'http://vp2*'
    ];
    
    var exp_list = [ ];

    for(var index = 0;index<prod_list.length;index++){
         if(host==prod_list[index] ||
             shExpMatch(host, "*." + prod_list[index])){
            return "SOCKS5 127.0.0.1:7999";
         }
    }

    for(var index = 0;index<qa_list.length;index++){
         if(host==qa_list[index] ||
             shExpMatch(host, "*." + qa_list[index])){
            return "SOCKS5 127.0.0.1:7995";
         }
    }

    for(var index = 0;index<exp_list.length;index++){
        var re = new RegExp(exp_list[index]);
        if(url.match(re)){
            return "SOCKS5 127.0.0.1:8527";
        }
    }
    return "DIRECT";
}
