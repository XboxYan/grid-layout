import styles from './App.module.css';

import React from 'react';
import { Layout,Icon } from 'antd';
import View from './layout/view';
const { Header, Footer, Sider, Content } = Layout;



const App = () => (
	<Layout>
		<Sider>
			<div className={styles.logo}><Icon type="layout" /><span>Grid Layout</span></div>
		</Sider>
		<Layout>
			<Header className={styles.header}>Grid Layout</Header>
			<Content style={{position:'relative'}}><View/></Content>
			<Footer>Footer</Footer>
		</Layout>
	</Layout>
)

export default App;
