import React from "react";
import {Button, Checkbox, Col, DatePicker, Form, Input, Row, Select} from "antd";

const {RangePicker} = DatePicker;

export default function Search() {
    const options = [
        {
            label: 'в названии',
            value: 'inName',
        },
        {
            label: 'в аннотации',
            value: 'inAnnotation',
        },
        {
            label: 'в ключевых словах',
            value: 'inKeywords',
        },
        {
            label: 'в содержании',
            value: 'inText',
        },
    ];

    return (
        <div>
            <p className="pDivider" style={{marginBottom: 5}}>
                РАСШИРЕННЫЙ ПОИСК
            </p>
            <Form layout='vertical'>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Поиск">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={11} md={21} sm={24} xs={24}>
                        <Form.Item label="Место поиска">
                            <Checkbox.Group options={options}/>
                        </Form.Item>
                    </Col>
                    <Col xl={13} md={24} sm={24} xs={24}>
                        <Form.Item label="Автор">
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
                    <Col xl={{span: 5, offset: 0.5}} md={{span: 9, offset: 0.5}} sm={24} xs={24}>
                        <Form.Item label="Год издания">
                            <RangePicker picker="year"/>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 8, offset: 1}} md={{span: 6, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="Поступившие">
                            <Select options={[
                                {
                                    value: 'За всё время',
                                    label: 'За всё время',
                                },
                                {
                                    value: 'За последний месяц',
                                    label: 'За последний месяц',
                                },
                                {
                                    value: 'За последние 3 месяца',
                                    label: 'За последние 3 месяца',
                                },
                                {
                                    value: 'За последние полгода',
                                    label: 'За последние полгода',
                                },
                                {
                                    value: 'За последний год',
                                    label: 'За последний год',
                                },
                                {
                                    value: 'За последние 5 лет',
                                    label: 'За последние 5 лет',
                                },
                            ]}/>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 9, offset: 1}} md={{span: 7, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="Сортировка">
                            <Select options={[
                                {
                                    value: 'По релевантности',
                                    label: 'По релевантности',
                                },
                                {
                                    value: 'По названию',
                                    label: 'По названию',
                                },
                                {
                                    value: 'По дате издательства',
                                    label: 'По дате издательства',
                                },
                                {
                                    value: 'По дате поступления',
                                    label: 'По дате поступления',
                                },
                            ]}/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Button ghost type='primary' style={{width: '100%'}}>Поиск</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}