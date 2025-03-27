import { useCallback, useEffect, useState } from '@lynx-js/react'
import fontFile from '../src/assets/fonts/Nunito/Nunito-VariableFont_wght.ttf'
import './App.css'
import { root, Component } from '@lynx-js/react'
import Wrapper from './components/Wrapper.tsx'
import Button from './components/Button.tsx'

export function App() {

  return (
    <view>
      <Wrapper>
        <Button content={"No kliknij"}>
          
          </Button>
      </Wrapper>
    </view>
  )
}
