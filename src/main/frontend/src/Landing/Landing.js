import * as React from 'react'
import { Card, Space } from 'antd';


const Lanading = () => {

    return (
        <Space align="baseline" size={16}>
            <Card
                title="WECCLESIA 재정"
                extra={<a href="#">이동하기</a>}
                style={{
                    width: 300,
                }}
            >
                <p>재정에 관련된 것을 수행합니다.</p>
            </Card>

            <Card
                title="기도제목 제출"
                extra={<a href="/PrayLanding">이동하기</a>}
                style={{
                    width: 300,
                }}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>
    );
}


export default Lanading;
