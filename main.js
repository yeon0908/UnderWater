import './reset.scss';
import './style.scss';
import App from './App.svelte'; 
const app = new App({  
    target: document.body,  
    props: {    
        name: 'world'  
    }
}); 
export default app;