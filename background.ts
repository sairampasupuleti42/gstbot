import { IChrome } from './IChrome';

const b: string = navigator.userAgent.match(/chrome/gi)[0].toLowerCase();
const { runtime: r, tabs: t }: IChrome = chrome;

r.onInstalled(() => {
    alert();
 });
