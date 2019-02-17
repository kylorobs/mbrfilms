import React from 'react'
import Strip from "../../Strip/Strip";
import StripStyles from "../../Strip/StripStyles.module.css";
import Button from "../../Button/Button.js";

export default () => (
  <div className={StripStyles.stripGrid}>
    <Strip image='false' direction='right'>
      <Button to='/about'> About </Button>
      <Button to = '/portfolio'> Portfolio </Button>
    </Strip>
  </div>
)
