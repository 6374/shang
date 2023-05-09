import Mock from 'mockjs';
//webpack：json默认暴露
import banner from './banner.json';
import floor from './floor.json';

//mock:方法 第一个参数：参数请求地址，第二个参数：请求数据
//模拟首页轮播图数据
Mock.mock('/Mock/banner',{code:200,data:banner})
Mock.mock('/Mock/floor',{code:200,data:floor})