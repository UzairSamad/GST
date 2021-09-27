/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  FormInput
} from "shards-react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import PageTitle from "./components/PageTitle";
import CustomTable from "./components/CustomTableCoefficent.js";
import Loader from './components/Loader'
import UsersOverview from '../components/blog/UsersOverview'
import axios from 'axios'

const UserGraph = (props) => {
  const [isLoading,setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean&encode=base64`)
      .then(response => {
        setTimeout(() => {
          setIsloading(false)
        }, 1000);
        console.log(response,'ressssssssss')
      })
      .catch(error => {
        setIsloading(false)
        console.log(error,'ressssssssss')
      });
}, [])


  const tableHeader = ['Name', 'T1ART', 'T1AED', 'T1PWS', 'T2ART', 'T2AED', 'T2TIME', 'T2ERRCT', 'T2PERNOT', 'T3ERRCT', 'T4TOTAL', 'T4RIGHT', 'T3LEFT', 'EDIT']
  const tableDisplayData = [
    'guide',
    'fname',
    'testVersion',
    'believedImpaired',
    'fullAttention',
    'testStart',
    'classicScore',
    'classicScore',
    'classicScore',
    'classicScore',
    'classicScore',
    'classicScore',
    'classicScore',

    'detailButton',

  ]
  const [searchText, setSearchText] = useState('')
  const initialData = {
    name: '',
    price: '',
    description: ''
  }

  useEffect(() => {
    renderChart()

  }, [])

  const renderChart = () => {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = generatechartData();
    function generatechartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 150);
      let visits = -40;
      let b = 0.6;
      for (var i = 0; i < 150; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);
        if (i > 80) {
          b = 0.4;
        }
        visits += Math.round((Math.random() < b ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 3;
    series.tooltipText = "{valueY.value}";
    series.fillOpacity = 0.1;

    // Create a range to change stroke for values below 0
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = chart.colors.getIndex(4);
    range.contents.fill = range.contents.stroke;
    range.contents.strokeOpacity = 0.7;
    range.contents.fillOpacity = 0.1;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    series.tooltip.getFillFromObject = false;
    series.tooltip.adapter.add("x", (x, target) => {
      if (series.tooltip.tooltipDataItem.valueY < 0) {
        series.tooltip.background.fill = chart.colors.getIndex(4);
      }
      else {
        series.tooltip.background.fill = chart.colors.getIndex(0);
      }
      return x;
    })
  }


  let products = [
    {
      guide: 'Iphone Mean',
      fname: 'Jhon',
      testVersion: 'Classic',
      believedImpaired: 'Classic',
      fullAttention: 'True',
      testStart: '2021-08-10 10:08:54 +0000',
      classicScore: '68.22',
      gsTScore: '68.22',
      detailButton: 'Button',
      detailButton: 'Button1',



    },
    {
      guide: 'Iphone Sd',
      fname: 'Jhon',
      testVersion: 'Classic',
      believedImpaired: 'Classic',
      fullAttention: 'True',
      testStart: '2021-08-10 10:08:54 +0000',
      classicScore: '68.22',
      gsTScore: '68.22',
      detailButton: 'Button',
    },

  ]

  return (
    <Container fluid className="main-content-container px-4">
        <Loader isloading={isLoading} />

      {/* Page Header */}
      <Row noGutters className="page-header py-4" style={{ backgroundColor: '#fff', marginBottom: '30px', marginTop: '30px', width: '100%', height: '100px' }}>
        <Col md="4" style={{ marginLeft: '2%' }}>
          <div style={{ fontSize: '22px', fontWeight: '100' }}>User Record</div>
          <div style={{ fontWeight: '100' }}>Dashboard</div>
        </Col>
        <Col md="3">
        </Col>
        <Col md="1">
        </Col>
        <Col md="2" style={{ flexDirection: 'row', display: 'flex', marginLeft: '13%', marginTop: '-5px' }}>
        </Col>
      </Row>
      <UsersOverview />

      <Row noGutters style={{  marginBottom: '30px', marginTop: '50px',width:'102%' }}>
      <CustomTable titleEdit='Edit Product' searchText={searchText} props={props} onEditNavigate='/add-editproduct' tableHead={tableHeader} tableBody={products} tableDisplayData={tableDisplayData} />
      </Row>
    </Container>
  );
}

export default UserGraph
