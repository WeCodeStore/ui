
import {axiosUser} from '../../services/ApiSetup';
import mockAxios from "axios";
import MockAdapter from 'axios-mock-adapter';

import UserService from'../../services/userService';


//const mock = new MockAdapter(axios);
const mockData = {'data':123};

describe("fetchAllUser", () => {
  /*  it("should return project count", () => {
        var mock = new MockAdapter(axiosUser);
        const data = {};
        mock.onGet("/store/users").reply(200, data);

        UserService.getAllUser().then((response) => {
            expect(response.data).toEqual(data);

        }).catch((error) => console.log(error));
    }) */

    it ("", async () =>{
        
      mockAxios.get.mockImplementationOnce(() =>
         Promise.resolve({ data: mockData }),
      )

      const tt = await UserService.getAllUser();
        console.log(tt)
    })
});

/*describe("fetchTestCount", () => {
    it("should return test count", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = 10;
        mock.onGet("/MetricReport/tests/all").reply(200, data)
        getTests().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));

    });
});
describe("fetchCoveragePercentage", () => {
    it("should return coverage percentage", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = 15;
        mock.onGet("/MetricReport/average-unit-test-coverage/all").reply(200, data)
        getCoverage().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));

    });
});
describe("fetchFeatureCount", () => {
    it("should return feature count", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = 20;
        mock.onGet("/MetricReport/features/all").reply(200, data)
        getFeatures().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));

    });
});
describe("fetchLineGraphData", () => {
    it("should return line graph data", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = [
            {
                "id": "Americas",
                "color": "hsl(164, 70%, 50%)",
                "data": [
                    {
                        "x": "2023-01-21",
                        "y": 2
                    }
                ]
            }, {
                "id": "Europe",
                "color": "hsl(310, 70%, 50%)",
                "data": [
                    {
                        "x": "2023-01-21",
                        "y": 8
                    }, {
                        "x": "2023-01-31",
                        "y": 4
                    }, {
                        "x": "2023-02-21",
                        "y": 9
                    }, {
                        "x": "2023-03-21",
                        "y": 11
                    }
                ]
            }, {
                "id": "Middle East",
                "color": "hsl(211, 70%, 50%)",
                "data": [
                    {
                        "x": "2023-01-21",
                        "y": 9
                    },
                    {
                        "x": "2023-01-22",
                        "y": 5
                    },
                    {
                        "x": "2023-02-21",
                        "y": 11
                    },
                    {
                        "x": "2023-02-25",
                        "y": 5
                    }, {
                        "x": "2023-03-15",
                        "y": 3
                    }, {
                        "x": "2023-03-21",
                        "y": 14
                    }, {
                        "x": "2023-04-21",
                        "y": 6
                    }
                ]
            }, {
                "id": "Asia Pacific",
                "color": "hsl(73, 70%, 50%)",
                "data": [
                    {
                        "x": "2023-01-15",
                        "y": 4
                    }, {
                        "x": "2023-01-21",
                        "y": 4
                    }, {
                        "x": "2023-01-31",
                        "y": 4
                    }
                ]
            }
        ]
        mock.onGet("/graphs/line/2023").reply(200, data)
        getLineGraph("2023").then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));

    });
});


describe("fetchLineGraphYears", () => {
    it("should return line graph years", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = ["2022", "2023"];
        mock.onGet("/graphs/line/years").reply(200, data)
        getLineGraphYears().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));
    });
});

describe("fetchBarGraphData", () => {
    it("should return bar graph data", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = [
            {
                "geography": "Americas",
                "unitTests": 100,
                "unitTestsColor": "hsl(164, 70%, 50%)",
                "integrationTests": 99,
                "integrationTestsColor": "hsl(174, 70%, 50%)",
                "e2eTests": 99,
                "e2eTestsColor": "hsl(268, 70%, 50%)"
            }, {
                "geography": "Europe",
                "unitTests": 96,
                "unitTestsColor": "hsl(164, 70%, 50%)",
                "integrationTests": 94,
                "integrationTestsColor": "hsl(174, 70%, 50%)",
                "e2eTests": 91,
                "e2eTestsColor": "hsl(268, 70%, 50%)"
            }, {
                "geography": "Middle East",
                "unitTests": 96,
                "unitTestsColor": "hsl(164, 70%, 50%)",
                "integrationTests": 95,
                "integrationTestsColor": "hsl(174, 70%, 50%)",
                "e2eTests": 89,
                "e2eTestsColor": "hsl(268, 70%, 50%)"
            }, {
                "geography": "Asia Pacific",
                "unitTests": 96,
                "unitTestsColor": "hsl(164, 70%, 50%)",
                "integrationTests": 95,
                "integrationTestsColor": "hsl(174, 70%, 50%)",
                "e2eTests": 92,
                "e2eTestsColor": "hsl(268, 70%, 50%)"
            }
        ]
        mock.onGet("/graphs/coverage").reply(200, data)
        getTestCoverageBarGraph().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));

    });
});

describe("fetchFeaturesPerCountry", () => {
    it("should return features per country", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = [
            {
                "id": "USA",
                "value": 171
            },
            {
                "id": "FRA",
                "value": 55
            },
            {
                "id": "AUS",
                "value": 53
            },
            {
                "id": "JPN",
                "value": 179
            }, {
                "id": "BRA",
                "value": 72
            }, {
                "id": "KOR",
                "value": 71
            }, {
                "id": "QAT",
                "value": 56
            }, {
                "id": "YEM",
                "value": 1
            }
        ];
        mock.onGet("/graphs/choro/features").reply(200, data)
        getFeaturesPerCountry().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));
    });
});
describe("getRecentReports", () => {
    it("should return list of recent reports", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = [{
                dateSubmitted: "2023-04-21T00:00:00.000+00:00",
                features: 6,
                name: "Mitsubishi",
                projectId: 7,
                teamSize: 13,
                totalTestCount: 15
            },
            {
                dateSubmitted: "2023-04-21T00:00:00.000+00:00",
                features: 7,
                name: "Sony",
                projectId: 10,
                teamSize: 13,
                totalTestCount: 17
            },
            {
                dateSubmitted: "2023-04-21T00:00:00.000+00:00",
                features: 5,
                name: "CGI",
                projectId: 15,
                teamSize: 11,
                totalTestCount: 8
            },
        ];
        mock.onGet("/graphs/recent").reply(200, data)
        getRecentReports().then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));
    });
});

describe("fetchMetricReportID", () => {
    it("should return metric report of id 1", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = [{
            "metrics": [{
                "id": 13,
                "dateSubmitted": "2022-12-20T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 2,
                "totalTestCount": 7,
                "unitTestCoverage": 100,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 99.53,
                "e2eTestCoverage": 99.67,
                "uaTestCoverage": 0,
                "untestedCode": 0,
                "teamSize": 5,
                "status": "COMPLETED"
            }, {
                "id": 12,
                "dateSubmitted": "2022-11-30T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 3,
                "totalTestCount": 13,
                "unitTestCoverage": 98.11,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 98.23,
                "e2eTestCoverage": 97.78,
                "uaTestCoverage": 0,
                "untestedCode": 2,
                "teamSize": 5,
                "status": "IN PROGRESS"
            }, {
                "id": 11,
                "dateSubmitted": "2022-10-31T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 4,
                "totalTestCount": 12,
                "unitTestCoverage": 96,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 95,
                "e2eTestCoverage": 93,
                "uaTestCoverage": 0,
                "untestedCode": 5,
                "teamSize": 10,
                "status": "IN PROGRESS"
            }, {
                "id": 10,
                "dateSubmitted": "2022-09-30T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 5,
                "totalTestCount": 11,
                "unitTestCoverage": 97.1,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 97,
                "e2eTestCoverage": 96.88,
                "uaTestCoverage": 0,
                "untestedCode": 2,
                "teamSize": 10,
                "status": "IN PROGRESS"
            }, {
                "id": 9,
                "dateSubmitted": "2022-08-31T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 5,
                "totalTestCount": 14,
                "unitTestCoverage": 98.09,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 96.73,
                "e2eTestCoverage": 92.02,
                "uaTestCoverage": 0,
                "untestedCode": 2,
                "teamSize": 8,
                "status": "IN PROGRESS"
            }, {
                "id": 8,
                "dateSubmitted": "2022-07-31T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 5,
                "totalTestCount": 14,
                "unitTestCoverage": 94.03,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 92.15,
                "e2eTestCoverage": 93.64,
                "uaTestCoverage": 0,
                "untestedCode": 5,
                "teamSize": 7,
                "status": "IN PROGRESS"
            }, {
                "id": 7,
                "dateSubmitted": "2022-06-30T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 4,
                "totalTestCount": 10,
                "unitTestCoverage": 97,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 95,
                "e2eTestCoverage": 96,
                "uaTestCoverage": 0,
                "untestedCode": 3,
                "teamSize": 7,
                "status": "IN PROGRESS"
            }, {
                "id": 6,
                "dateSubmitted": "2022-05-31T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 5,
                "totalTestCount": 16,
                "unitTestCoverage": 94,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 86,
                "e2eTestCoverage": 89,
                "uaTestCoverage": 0,
                "untestedCode": 7,
                "teamSize": 8,
                "status": "IN PROGRESS"
            }, {
                "id": 5,
                "dateSubmitted": "2022-04-30T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 4,
                "totalTestCount": 10,
                "unitTestCoverage": 95,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 83,
                "e2eTestCoverage": 90,
                "uaTestCoverage": 0,
                "untestedCode": 7,
                "teamSize": 6,
                "status": "IN PROGRESS"
            }, {
                "id": 4,
                "dateSubmitted": "2022-03-31T00:00:00.000+00:00",
                "projectId": 1,
                "startDate": "2022-01-01T00:00:00.000+00:00",
                "endDate": "2022-12-21T00:00:00.000+00:00",
                "features": 5,
                "totalTestCount": 14,
                "unitTestCoverage": 100,
                "stories": 0,
                "productionRollout": 0,
                "integrationTestCoverage": 90,
                "e2eTestCoverage": 93,
                "uaTestCoverage": 0,
                "untestedCode": 3,
                "teamSize": 10,
                "status": "IN PROGRESS"
            }],
            "features": 53,
            "tests": 143,
            "employees": 5,
            "status": "COMPLETED"
        }];
        mock.onGet("/MetricReport/1").reply(200, data)
        getMetricsById("1").then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));
    })
});

describe("fetch getMetricsBydateRange", () => {
    it("should return metrics by date range", () => {
        var mock = new MockAdapter(axiosProjectFEMS);
        const data = [{
            "projectId": 7,
            "name": "Mitsubishi",
            "dateSubmitted": "2023-04-21T00:00:00.000+00:00",
            "features": 6,
            "totalTestCount": 15,
            "teamSize": 13
        }];
        mock.onGet("/graphs/metrics?startDate=04-01-2023&endDate=04-27-2023").reply(200, data)
        getMetricsBydateRange("04-01-2023", "04-27-2023").then(response => {
            expect(response.data).toEqual(data);
        }).catch((error) => console.log(error));
    })
})
*/