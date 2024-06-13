import * as React from 'react'
import {
    HomeOutlined,
} from '@ant-design/icons';
import { Space, Radio, Flex, Checkbox, Input, Button, message } from 'antd';
import { Text } from '@chakra-ui/react'
import express from 'express';
import cors from 'cors';

const PrayInsert = () => {

const port = 3000;

const app = express();

app.use(cors());
        const PrayType = [
            { label: '감사', value: 'audit' },
            { label: '회개', value: 'repentance' },
            { label: '중보', value: 'mediator' },
            { label: '기타', value: 'etc' },
        ];
    
        const { TextArea } = Input;
        const [name, setName] = React.useState('');
        const [visibility, setVisibility] = React.useState('open');
        const [selectedPrayTypes, setSelectedPrayTypes] = React.useState([]);
        const [context, setContext] = React.useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const prayVO = {
                name,
                audit: selectedPrayTypes.includes('audit'),
                repentance: selectedPrayTypes.includes('repentance'),
                mediator: selectedPrayTypes.includes('mediator'),
                etc: selectedPrayTypes.includes('etc'),
                isOpen: visibility === 'open',
                context,
            };
    
            try {
                const response = await fetch('http://localhost:8080/pray/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prayVO),
                });
    
                if (response.ok) {
                    message.success('기도제목이 성공적으로 제출되었습니다!');
                    // Reset form fields
                    setName('');
                    setVisibility('open');
                    setSelectedPrayTypes([]);
                    setContext('');
                    window.location.href='./PrayLanding';
                } else {
                    message.error('기도제목 제출에 실패했습니다.');
                }
            } catch (error) {
                message.error('서버와의 통신에 오류가 발생했습니다.');
                console.error('Error:', error);
            }
        };

    return (
        <><Space>
            <HomeOutlined href='/ParyLading' />
        </Space><Text fontSize='5xl'>기도제목 제출하기</Text>
            <Flex vertical gap="middle">
                <Radio.Group defaultValue="open">
                    <Radio.Button value="open">기도제목을 공개할래요</Radio.Button>
                    <Radio.Button value="close">기도제목을 비공개할래요</Radio.Button>
                </Radio.Group>
            </Flex>
            <br></br>

            <Checkbox.Group options={PrayType} defaultValue={['Apple']} />
            <br></br>
            <Flex vertical gap={12}>
                <Input placeholder="이름 (대신에 닉네임을 쓰셔도 돼요!)" variant="filled" />
                <TextArea
                    showCount
                    maxLength={500}
                    placeholder="기도제목을 작성해주세요 :) 위클레시아 공동체가 함께 기도해드릴게요!"
                    style={{
                        height: 300,
                        resize: 'none',
                    }}
                />
            </Flex>

            <Button type="submit" onClick={handleSubmit}>기도제목 제출하기</Button>
        </>
    );
}
export default PrayInsert;