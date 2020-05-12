import $ from 'jquery'
// eslint-disable-next-line
import scrollbar from 'jquery.scrollbar'
import { isMobileDevice, viewportWidth } from '../utils'


export default function SimonScrollbar(){
    if(!isMobileDevice() && viewportWidth() >= 768){
        $('.scroller').scrollbar();
    }
}