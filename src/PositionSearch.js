var axios = require('axios');

const URL = 'https://search.whoishiring.io/item/item/_search?scroll=10m';
const CATEGORIES = ['programming', 'qa', 'design', 'pr', 'management',
    'sales', 'marketing', 'customer', 'product', 'hr', 'other'];

export default function jobSearch(bottom_left_lat, bottom_left_long, top_right_lat, top_right_long, categories=[], keywords=null) {
    var data = {
        "url": URL,
        "data": {
            "query": {
                "bool": {
                    "must": [],
                    "should": [],
                    "must_not": [],
                    "filter": {
                        "bool": {
                            "must": [
                                {
                                    "geo_bounding_box": {
                                        "location": {
                                            "bottom_left": {
                                                "lat": bottom_left_lat,
                                                "lon": bottom_left_long
                                            },
                                            "top_right": {
                                                "lat": top_right_lat,
                                                "lon": top_right_long
                                            }
                                        }
                                    }
                                }
                            ],
                            "should": [],
                            "must_not": []
                        }
                    }
                },
                "sort": [
                    {
                        "promoted": {
                            "order": "desc"
                        }
                    },
                    "_score",
                    {
                        "time": {
                            "order": "desc",
                            "mode": "min"
                        }
                    }
                ],
                "size": 40
            }
        }
    };

    CATEGORIES.forEach(function (category) {
        if (!categories.includes(category)) {
            data.data.query.bool.filter.bool.must_not.push({"term": {"category.slug": category}});
        }
    });

    return new Promise(function (resolve, reject) {
        axios({
            method:'POST',
            url: 'http://localhost:5000',
            data: data,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            responseType: 'json'
        }).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            reject(error);
        });
    });
}

            /*
            {
          "bool": {
            "should": [
              {
                "match": {
                  "company": {
                    "query": "bob",
                    "boost": 5,
                    "type": "phrase"
                  }
                }
              },
              {
                "match": {
                  "title": {
                    "query": "bob",
                    "boost": 5,
                    "type": "phrase"
                  }
                }
              },
              {
                "match": {
                  "description": {
                    "query": "bob",
                    "boost": 1,
                    "type": "phrase"
                  }
                }
              }
            ]
          }
        }
             */