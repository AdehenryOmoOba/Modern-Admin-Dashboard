import React from 'react'
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar} from '@syncfusion/ej2-react-richtexteditor'
import {Header} from '../components'

const Editor = () => {
  return (
    <div className='m-2 mt-24 p-2 bg-white rounded-3xl md:m-10 md:p-10'>
    <Header category='App' title='Editor'/>
    <RichTextEditorComponent>
      <Inject services={[HtmlEditor, Toolbar,Image,Link,QuickToolbar]}/>
    </RichTextEditorComponent>
   </div>
  )
}

export default Editor