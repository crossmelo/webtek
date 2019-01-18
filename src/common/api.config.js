//API接口地址
export function apiBase() {
    let hostname = window.location.hostname,
        API_BASE_URL = 'https://market.chnrising.cn/'; //默认环境
    // 	if(hostname === 'crm.dunizb.cn') { //正式环境
    // 		API_BASE_URL = '';
    // 	} else if(hostname === 'http://wealth.chnrising.cn/') { //公网测试环境
    // 		API_BASE_URL = 'http://wealth.chnrising.cn/';
    // 	} else if(hostname === 'localhost') { //内网测试环境
    // 		API_BASE_URL = 'http://192.168.1.127:8001/';
    // 	}
    return API_BASE_URL;
}