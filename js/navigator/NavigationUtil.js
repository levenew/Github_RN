/**
 * 全局导航跳转工具类
 */

export default class NavigationUtil {

    static goBack(navigation) {
        navigation.goBack();
    }

    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.info('NavigationUtil.navigation can not be null')
            return;
        }
        navigation.navigate(page, {
            ...params
        });
    }

    static restToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }


}
