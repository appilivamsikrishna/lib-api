"jest": {
    "verbose": true,
    "testSequencer": "/home/abc/jest-supertest/testSequencer.js",
    "coverageDirectory": "/home/abc/jest-supertest/coverage/my_reports/",
    "coverageReporters": ["html","text"],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
  }


  "devDependencies": {
    "jest": "^25.5.4",
    "jest-serial-runner": "^1.1.0",
    "jest-stare": "^2.0.1",
    "supertest": "^4.0.2"
  }