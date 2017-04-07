



import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import {ifurl} from './dirty-inject';

import './app.css';


angular.module('app', [
    Common,
    Components
]);



ifurl('/chat_v3/', () => {
    document.body.innerHTML += ' <invites></invites>';

});

