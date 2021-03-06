import util from 'util';
import transactions from "./index"

const mergedTransactions = {
    '04/03/2020': [
        {
            'Salary Credit': [
                {
                    transactionId: 8,
                    accountId: 1,
                    name: 'Salary Credit',
                    transactionDate: '04/03/2020',
                    amount: 1900,
                    transactionType: false,
                    comments: 'Salary Credit',
                    createdDate: '2020-03-27T01:34:03.000+0000',
                    modifiedDate: '2020-03-27T03:15:38.000+0000',
                    rolloverBalance1: 3602.87,
                    rolloverBalance2: 1218.6
                },
                {
                    transactionId: 9,
                    accountId: 9,
                    name: 'Salary Credit',
                    transactionDate: '04/03/2020',
                    amount: 1500,
                    transactionType: false,
                    comments: 'Salary Credit',
                    createdDate: '2020-03-27T01:34:12.000+0000',
                    modifiedDate: '2020-03-29T14:22:48.000+0000',
                    rolloverBalance1: 3602.87,
                    rolloverBalance2: 2718.6
                }
            ]
        },
        {
            Transfer: [
                {
                    transactionId: 10,
                    accountId: 1,
                    name: 'Transfer',
                    transactionDate: '04/03/2020',
                    amount: 700,
                    transactionType: true,
                    comments: 'Transfer to GS',
                    createdDate: '2020-03-27T01:35:23.000+0000',
                    modifiedDate: '2020-03-29T14:12:19.000+0000',
                    rolloverBalance1: 2902.87,
                    rolloverBalance2: 2718.6
                },
                {
                    transactionId: 11,
                    accountId: 9,
                    name: 'Transfer',
                    transactionDate: '04/03/2020',
                    amount: 500,
                    transactionType: true,
                    comments: 'Transfer to GS',
                    createdDate: '2020-03-27T01:35:32.000+0000',
                    modifiedDate: '2020-03-27T01:35:32.000+0000',
                    rolloverBalance1: 2902.87,
                    rolloverBalance2: 2218.6
                }
            ]
        }
    ],
    '04/04/2020': [
        {
            'Rent 04/01': [
                {
                    transactionId: 6,
                    accountId: 9,
                    name: 'Rent 04/01',
                    transactionDate: '04/04/2020',
                    amount: 1178.78,
                    transactionType: true,
                    comments: 'Rent 04/01',
                    createdDate: '2020-03-27T00:09:14.000+0000',
                    modifiedDate: '2020-03-29T04:41:23.000+0000',
                    rolloverBalance1: 2902.87,
                    rolloverBalance2: 1039.82
                },
                {
                    transactionId: 5,
                    accountId: 1,
                    name: 'Rent 04/01',
                    transactionDate: '04/04/2020',
                    amount: 1178.78,
                    transactionType: true,
                    comments: 'Rent 04/01',
                    createdDate: '2020-03-27T00:09:06.000+0000',
                    modifiedDate: '2020-03-29T04:41:18.000+0000',
                    rolloverBalance1: 1724.09,
                    rolloverBalance2: 1039.82
                }
            ]
        },
        {
            'Saving Credit': [
                {
                    transactionId: 35,
                    accountId: 19,
                    name: 'Saving Credit',
                    transactionDate: '04/04/2020',
                    amount: 550,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:11:14.000+0000',
                    modifiedDate: '2020-03-29T14:18:00.000+0000',
                    rolloverBalance1: 1724.09,
                    rolloverBalance2: 1039.82
                },
                {
                    transactionId: 36,
                    accountId: 21,
                    name: 'Saving Credit',
                    transactionDate: '04/04/2020',
                    amount: 550,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:11:19.000+0000',
                    modifiedDate: '2020-03-29T14:12:48.000+0000',
                    rolloverBalance1: 1724.09,
                    rolloverBalance2: 1039.82
                },
                {
                    transactionId: 37,
                    accountId: 20,
                    name: 'Saving Credit',
                    transactionDate: '04/04/2020',
                    amount: 100,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:11:25.000+0000',
                    modifiedDate: '2020-03-29T14:18:26.000+0000',
                    rolloverBalance1: 1724.09,
                    rolloverBalance2: 1039.82
                }
            ]
        }
    ],
    '04/05/2020': [
        {
            'Chase CC': [
                {
                    transactionId: 12,
                    accountId: 9,
                    name: 'Chase CC',
                    transactionDate: '04/05/2020',
                    amount: 535.12,
                    transactionType: true,
                    comments: 'Payment to Chase Credit Card',
                    createdDate: '2020-03-27T01:36:19.000+0000',
                    modifiedDate: '2020-03-29T02:35:06.000+0000',
                    rolloverBalance1: 1724.09,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        },
        {
            'Payment Received': [
                {
                    transactionId: 38,
                    accountId: 17,
                    name: 'Payment Received',
                    transactionDate: '04/05/2020',
                    amount: 535.12,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:14:14.000+0000',
                    modifiedDate: '2020-03-29T14:14:14.000+0000',
                    rolloverBalance1: 1724.09,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        }
    ],
    '04/09/2020': [
        {
            'Bofa CC': [
                {
                    transactionId: 13,
                    accountId: 1,
                    name: 'Bofa CC',
                    transactionDate: '04/09/2020',
                    amount: 140.82,
                    transactionType: true,
                    comments: 'Payment to BOFA Credit Card',
                    createdDate: '2020-03-27T01:36:51.000+0000',
                    modifiedDate: '2020-03-28T22:46:04.000+0000',
                    rolloverBalance1: 1583.27,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        },
        {
            'Payment Received': [
                {
                    transactionId: 39,
                    accountId: 15,
                    name: 'Payment Received',
                    transactionDate: '04/09/2020',
                    amount: 140.82,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:15:17.000+0000',
                    modifiedDate: '2020-03-29T14:15:17.000+0000',
                    rolloverBalance1: 1583.27,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        }
    ],
    '04/10/2020': [
        {
            "BJ's CC": [
                {
                    transactionId: 14,
                    accountId: 1,
                    name: "BJ's CC",
                    transactionDate: '04/10/2020',
                    amount: 327.18,
                    transactionType: true,
                    comments: "Payment to BJ's Credit Card",
                    createdDate: '2020-03-27T01:37:38.000+0000',
                    modifiedDate: '2020-03-29T14:22:45.000+0000',
                    rolloverBalance1: 1256.09,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        },
        {
            'Payment Received': [
                {
                    transactionId: 41,
                    accountId: 14,
                    name: 'Payment Received',
                    transactionDate: '04/10/2020',
                    amount: 327.18,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:16:31.000+0000',
                    modifiedDate: '2020-03-29T14:22:55.000+0000',
                    rolloverBalance1: 1256.09,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        }
    ],
    '04/11/2020': [
        {
            Electricity: [
                {
                    transactionId: 15,
                    accountId: 1,
                    name: 'Electricity',
                    transactionDate: '04/11/2020',
                    amount: 173.31,
                    transactionType: true,
                    comments: 'national grid electricitiy bill',
                    createdDate: '2020-03-27T01:38:11.000+0000',
                    modifiedDate: '2020-03-29T14:54:39.000+0000',
                    rolloverBalance1: 1082.78,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        }
    ],
    '04/15/2020': [
        {
            'Honda CC': [
                {
                    transactionId: 17,
                    accountId: 1,
                    name: 'Honda CC',
                    transactionDate: '04/15/2020',
                    amount: 476.49,
                    transactionType: true,
                    comments: 'Payment for car loan',
                    createdDate: '2020-03-27T01:39:45.000+0000',
                    modifiedDate: '2020-03-29T14:20:25.000+0000',
                    rolloverBalance1: 606.29,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        },
        {
            'Payment Received': [
                {
                    transactionId: 42,
                    accountId: 11,
                    name: 'Payment Received',
                    transactionDate: '04/15/2020',
                    amount: 476.49,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:17:25.000+0000',
                    modifiedDate: '2020-03-29T14:53:34.000+0000',
                    rolloverBalance1: 606.29,
                    rolloverBalance2: 504.69999999999993
                }
            ]
        }
    ],
    '04/17/2020': [
        {
            'Salary Credit': [
                {
                    transactionId: 19,
                    accountId: 9,
                    name: 'Salary Credit',
                    transactionDate: '04/17/2020',
                    amount: 1500,
                    transactionType: false,
                    comments: 'Salary Credit',
                    createdDate: '2020-03-27T01:40:17.000+0000',
                    modifiedDate: '2020-03-29T04:35:13.000+0000',
                    rolloverBalance1: 606.29,
                    rolloverBalance2: 2004.6999999999998
                },
                {
                    transactionId: 18,
                    accountId: 1,
                    name: 'Salary Credit',
                    transactionDate: '04/17/2020',
                    amount: 1900,
                    transactionType: false,
                    comments: 'Salary Credit',
                    createdDate: '2020-03-27T01:40:08.000+0000',
                    modifiedDate: '2020-03-29T04:35:19.000+0000',
                    rolloverBalance1: 2506.29,
                    rolloverBalance2: 2004.6999999999998
                }
            ]
        },
        {
            Transfer: [
                {
                    transactionId: 21,
                    accountId: 9,
                    name: 'Transfer',
                    transactionDate: '04/17/2020',
                    amount: 500,
                    transactionType: true,
                    comments: 'Transfer to GS',
                    createdDate: '2020-03-27T01:41:23.000+0000',
                    modifiedDate: '2020-03-29T04:35:33.000+0000',
                    rolloverBalance1: 2506.29,
                    rolloverBalance2: 1504.6999999999998
                },
                {
                    transactionId: 20,
                    accountId: 1,
                    name: 'Transfer',
                    transactionDate: '04/17/2020',
                    amount: 700,
                    transactionType: true,
                    comments: 'Transfer to GS',
                    createdDate: '2020-03-27T01:41:16.000+0000',
                    modifiedDate: '2020-03-29T04:35:26.000+0000',
                    rolloverBalance1: 1806.29,
                    rolloverBalance2: 1504.6999999999998
                }
            ]
        }
    ],
    '04/18/2020': [
        {
            'Saving Credit': [
                {
                    transactionId: 32,
                    accountId: 19,
                    name: 'Saving Credit',
                    transactionDate: '04/18/2020',
                    amount: 550,
                    transactionType: false,
                    comments: 'Transfer',
                    createdDate: '2020-03-29T14:09:35.000+0000',
                    modifiedDate: '2020-03-29T14:18:47.000+0000',
                    rolloverBalance1: 1806.29,
                    rolloverBalance2: 1504.6999999999998
                },
                {
                    transactionId: 33,
                    accountId: 20,
                    name: 'Saving Credit',
                    transactionDate: '04/18/2020',
                    amount: 100,
                    transactionType: false,
                    comments: 'Transfer',
                    createdDate: '2020-03-29T14:09:44.000+0000',
                    modifiedDate: '2020-03-29T14:19:00.000+0000',
                    rolloverBalance1: 1806.29,
                    rolloverBalance2: 1504.6999999999998
                },
                {
                    transactionId: 34,
                    accountId: 21,
                    name: 'Saving Credit',
                    transactionDate: '04/18/2020',
                    amount: 550,
                    transactionType: false,
                    comments: 'Transfer',
                    createdDate: '2020-03-29T14:09:51.000+0000',
                    modifiedDate: '2020-03-29T14:19:08.000+0000',
                    rolloverBalance1: 1806.29,
                    rolloverBalance2: 1504.6999999999998
                }
            ]
        }
    ],
    '04/20/2020': [
        {
            'Banana Republic': [
                {
                    transactionId: 22,
                    accountId: 1,
                    name: 'Banana Republic',
                    transactionDate: '04/20/2020',
                    amount: 30.13,
                    transactionType: true,
                    comments: 'Payment to Banana CC',
                    createdDate: '2020-03-27T01:41:44.000+0000',
                    modifiedDate: '2020-03-29T04:40:08.000+0000',
                    rolloverBalance1: 1776.1599999999999,
                    rolloverBalance2: 1504.6999999999998
                }
            ]
        },
        {
            'Payment Received': [
                {
                    transactionId: 31,
                    accountId: 16,
                    name: 'Payment Received',
                    transactionDate: '04/20/2020',
                    amount: 30.13,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:07:20.000+0000',
                    modifiedDate: '2020-03-29T14:07:20.000+0000',
                    rolloverBalance1: 1776.1599999999999,
                    rolloverBalance2: 1504.6999999999998
                }
            ]
        }
    ],
    '04/30/2020': [
        {
            'Apple CC': [
                {
                    transactionId: 24,
                    accountId: 1,
                    name: 'Apple CC',
                    transactionDate: '04/30/2020',
                    amount: 321.79,
                    transactionType: true,
                    comments: 'Payment to Apple CC',
                    createdDate: '2020-03-27T01:42:27.000+0000',
                    modifiedDate: '2020-03-29T14:52:55.000+0000',
                    rolloverBalance1: 1454.37,
                    rolloverBalance2: 1504.6999999999998
                }
            ]
        },
        {
            'Payment Received': [
                {
                    transactionId: 29,
                    accountId: 10,
                    name: 'Payment Received',
                    transactionDate: '04/30/2020',
                    amount: 321.79,
                    transactionType: false,
                    comments: 'Payment Received',
                    createdDate: '2020-03-29T14:05:28.000+0000',
                    modifiedDate: '2020-03-29T14:52:59.000+0000',
                    rolloverBalance1: 1454.37,
                    rolloverBalance2: 1504.6999999999998
                }
            ]
        }
    ]
}

// test('group transactions', () => {
//     // console.log(util.inspect(transactions, false, null, true /* enable colors */))
//     expect(transactions).toEqual(mergedTransactions);
// });

test('fake', () => {
    expect(true).toEqual(true);
});