import $ from 'jquery'
// eslint-disable-next-line
import scrollbar from 'jquery.scrollbar'
import { viewportWidth } from '../utils'
export default function SimonScrollbar(){
    if(viewportWidth() >= 768){
        $('.scroller').scrollbar();
    }
}