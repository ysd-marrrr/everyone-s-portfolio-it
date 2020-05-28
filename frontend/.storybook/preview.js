// Global SCSS
import '@/assets/scss/global.scss'
import './global.storybook.scss'

// Storybook Vue
import { configure } from '@storybook/vue';
import Vue from 'vue';

configure(require.context('../components', true, /\.stories\.js$/), module);