import * as React from 'react'
import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';

const PrayLanading = () => {

    return (
        <div>
            <Typography.Title
                level={1}
                style={{
                    margin: 0,
                }}
            >
                How To Pray for you
            </Typography.Title>
            <Flex
                vertical
                gap="small"
                style={{
                    width: '100%',
                }}
            >
                <Button type="primary" block onClick={onClickInsertPrayTitle}>
                    기도제목 쓰러가기 🙏
                </Button>

                <Button type="primary" block>
                    남들의 기도제목을 볼래요
                </Button>
            </Flex></div>
    );
}

const onClickInsertPrayTitle = () => {
    window.location.href='./PrayInsert';
}


export default PrayLanading;
