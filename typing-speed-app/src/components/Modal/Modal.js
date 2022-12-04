import { Button, Modal, Typography } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { countCorrectWords, countInCorrectWords, curretListKeyStrokeCount, setShowResult } from '../../redux/slice/wordSlice'
const { Title } = Typography;
const Content = styled.p`
    display: flex;
    justify-content: space-between;
`
const ContentSpan = styled.span`
text-transform: uppercase;
`

function ResultModal() {
    const { showResult, correctChar, inCorrectChar, editWordCount } = useSelector(state => state.wordSlice)
    const correctCount = useSelector(countCorrectWords)
    const incorrectCount = useSelector(countInCorrectWords)
    const totalKeyStroke = useSelector(curretListKeyStrokeCount)
    const dispatch = useDispatch()
    const handleResult = () => {
        dispatch(setShowResult(false))
    }
    return (
        <>
            <Modal footer={[
                <Button type='primary' onClick={handleResult}>Close Result</Button>
            ]} title="Your Result" open={showResult}>
                <Content style={{ flexDirection: 'column' }}>
                    <Title style={{ color: 'black', textAlign: 'center' }}>{correctCount + incorrectCount} WPM  </Title>
                </Content>
                <Content>
                    <ContentSpan>Accuracy </ContentSpan>
                    <ContentSpan>{
                        Math.round(((totalKeyStroke - incorrectCount) / (totalKeyStroke + Math.floor((editWordCount) / 2)) / 100)*10000)}</ContentSpan>
                </Content>
                <Content>
                    <ContentSpan>KEY Stroke</ContentSpan>
                    <ContentSpan><span style={{ color: 'green' }}>{correctChar}</span> - <span style={{ color: 'red' }}>{inCorrectChar}</span></ContentSpan>
                </Content>
                <Content>
                    <ContentSpan>Correct Word</ContentSpan>
                    <ContentSpan>{correctCount}</ContentSpan>
                </Content>
                <Content>
                    <ContentSpan>InCorrect Word</ContentSpan>
                    <ContentSpan>{incorrectCount}</ContentSpan>
                </Content>
            </Modal>
        </>
    )
}

export default ResultModal