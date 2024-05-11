"use client"

import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Checklist from '@editorjs/checklist';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';


function Editor() {

    const ref=useRef<EditorJS>();

    useEffect(()=>{
        initEditor();
    },[])
     
    const initEditor=()=>{
            const editor = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */
            tools:{
                header: {
                    class: Header,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder:'Enter a Header'
                    }
                  },  
                  list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                      defaultStyle: 'unordered'
                    }
                  },
                  checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                  },
                  paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                  },
            },
            holder: 'editorjs'
            });

            ref.current=editor;
        
    }
  return (
    <div>
        <div id='editorjs' ></div> 

    </div>
  )
}

export default Editor