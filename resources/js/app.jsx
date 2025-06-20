
import '../css/style.css'
import '../css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Layout'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />);
    return page;
  },
  setup({ el, App, props, plugin }) {
    createRoot(el).render(<App {...props} />)
    .use(plugin)
      .mount(el)
  },
  progress: {
    color: '#000'
  }
})

