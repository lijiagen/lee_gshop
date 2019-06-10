/*
与后台交互模块
 */
import ajax from './ajax'
/**
 * 获取地址信息(根据经纬度串)
 */
export const reqAddress = geohash => ajax('/api/position/' + geohash)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqCategorys = () => ajax('/api/index_category')
/**
 * 获取 msite 商铺列表(根据经纬度)
 */
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude,
  longitude})
