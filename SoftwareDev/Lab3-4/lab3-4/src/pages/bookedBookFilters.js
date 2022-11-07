import React from "react";
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";

const {RangePicker} = DatePicker;

export default function BookedBookFilters() {

    return (
        <div>
            <Form layout='vertical'>
                <Row>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item label="Статус брони">
                            <Select options={[
                                {
                                    value: 'Подтверждено',
                                    label: 'Подтверждено',
                                },
                                {
                                    value: 'Ожидает подтверждения',
                                    label: 'Ожидает подтверждения',
                                },
                                {
                                    value: 'Отменено',
                                    label: 'Отменено',
                                },
                            ]}/>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 11, offset: 1}} md={{span: 11, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="Поиск по названию книги">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 12}} md={12} sm={24} xs={24}>
                        <Form.Item label="Поиск по автору">
                            <Select options={[
                                {
                                    value: 'Джером Сэлинджер',
                                    label: 'Джером Сэлинджер',
                                },
                                {
                                    value: 'Рэй Бредбери',
                                    label: 'Рэй Бредбери',
                                },
                            ]}/>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 11, offset: 1}} md={{span: 11, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="Дата брони">
                            <RangePicker style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item label="">
                            <Button ghost type="primary" style={{width: '100%'}}>Сформировать</Button>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 11, offset: 1}} md={{span: 11, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="">
                            <Button danger ghost style={{width: '100%'}}>Очистить</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}