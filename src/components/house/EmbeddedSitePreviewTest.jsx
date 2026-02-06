const EmbeddedSitePreviewTest = ({ selectedHouseId, onSelectHouse }) => {
  return (
    <div className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50">
      <div className="h-[300px] md:h-[520px] lg:h-[720px] w-full">
        <div className="luchnihaj-map-box h-full w-full">
          <div id="interactive-map-test" className="luchnihaj-map-wrapper h-full w-full">
            <svg
              viewBox="0 0 1920 1072"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="luchnihaj-map-svg"
            >
              <image
                xlinkHref="/images/vyber_domu_2.jpg"
                href="/images/vyber_domu_2.jpg"
                x="0"
                y="0"
                width="1920"
                height="1072"
                preserveAspectRatio="xMidYMid slice"
              />

              {/* Polygony ze stránky Výběr domu (EmbeddedSitePreview) */}
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '1' ? 'lh-zone-selected' : ''}`}
                  data-house-id="1"
                  onClick={() => onSelectHouse && onSelectHouse('1')}
                  points="315,354 303,361 269,364 261,390 119,495 166,597 250,596 240,577 332,453 321,419 334,403 350,364 368,364 376,355"
                />
                <text className="lh-zone-label" x="202" y="500">1</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '2' ? 'lh-zone-selected' : ''}`}
                  data-house-id="2"
                  onClick={() => onSelectHouse && onSelectHouse('2')}
                  points="448,375 445,368 432,367 436,358 376,355 368,364 350,364 334,403 321,419 332,453 240,577 250,596 377,596 409,540 501,369"
                />
                <text className="lh-zone-label" x="352" y="500">2</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '3' ? 'lh-zone-selected' : ''}`}
                  data-house-id="3"
                  onClick={() => onSelectHouse && onSelectHouse('3')}
                  points="409,540 576,536 595,497 587,470 600,451 595,417 604,402 609,360 619,359 625,352 564,354 560,360 532,363 529,369 501,369"
                />
                <text className="lh-zone-label" x="492" y="500">3</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '4' ? 'lh-zone-selected' : ''}`}
                  data-house-id="4"
                  onClick={() => onSelectHouse && onSelectHouse('4')}
                  points="576,536 595,497 587,470 600,451 595,417 604,402 609,360 619,359 625,352 688,353 680,362 697,370 777,370 735,534"
                />
                <text className="lh-zone-label" x="652" y="500">4</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '5' ? 'lh-zone-selected' : ''}`}
                  data-house-id="5"
                  onClick={() => onSelectHouse && onSelectHouse('5')}
                  points="910,352 846,353 846,356 845,357 832,357 832,364 826,366 825,365 778,365 778,367 780,368 779,369 779,374 781,381 777,394 778,396 776,397 776,400 770,418 769,425 763,443 763,446 762,447 763,448 759,457 758,465 757,466 758,468 756,469 751,489 749,493 749,497 746,504 747,506 744,511 739,532 753,532 754,533 760,533 761,532 764,534 764,544 765,547 778,547 779,548 900,549 902,516 903,515 903,505 904,504 904,493 905,492 905,488 903,482 901,480 902,479 901,474 902,473 903,461 905,454 905,447 904,446 904,410 905,409 906,392 907,391 907,384 908,383 908,374 909,373 909,366 910,365"
                />
                <text className="lh-zone-label" x="812" y="500">5</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '6' ? 'lh-zone-selected' : ''}`}
                  data-house-id="6"
                  onClick={() => onSelectHouse && onSelectHouse('6')}
                  points="913,352 913,356 914,357 913,358 912,374 911,375 910,391 909,392 909,400 908,401 908,409 907,410 908,411 907,412 907,443 908,444 907,445 908,446 908,455 907,456 907,461 906,462 904,476 908,488 908,492 907,493 907,503 906,504 906,515 905,516 903,549 1066,548 1064,524 1063,523 1063,514 1062,513 1062,504 1061,503 1061,495 1060,494 1060,486 1059,485 1059,476 1058,475 1058,467 1057,466 1057,458 1056,457 1055,438 1054,437 1054,429 1053,428 1053,419 1052,418 1052,410 1051,409 1051,400 1050,399 1050,391 1049,390 1049,381 1048,380 1048,374 1049,373 1049,364 1048,363 1049,361 983,362 981,360 982,359 982,356 976,356 973,354 973,352"
                />
                <text className="lh-zone-label" x="962" y="500">6</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '7' ? 'lh-zone-selected' : ''}`}
                  data-house-id="7"
                  onClick={() => onSelectHouse && onSelectHouse('7')}
                  points="1209,355 1204,355 1200,349 1135,350 1136,353 1129,364 1127,371 1119,371 1118,370 1118,360 1062,360 1061,361 1052,361 1051,380 1052,381 1052,389 1053,390 1053,399 1054,400 1054,409 1055,410 1058,447 1059,448 1059,456 1060,457 1060,466 1061,467 1061,475 1062,476 1062,485 1064,494 1065,513 1067,520 1066,523 1067,524 1067,532 1068,533 1068,542 1070,546 1069,547 1091,547 1092,548 1227,548 1228,549 1233,549 1234,543 1217,489 1218,476 1219,475 1219,468 1218,467 1220,466 1215,446 1215,442 1216,441 1215,433 1216,432 1218,408 1214,395"
                />
                <text className="lh-zone-label" x="1122" y="500">7</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '8' ? 'lh-zone-selected' : ''}`}
                  data-house-id="8"
                  onClick={() => onSelectHouse && onSelectHouse('8')}
                  points="1203,349 1205,352 1209,352 1210,351 1212,353 1216,389 1219,402 1222,408 1221,409 1219,432 1218,433 1219,435 1219,442 1218,443 1219,444 1218,446 1223,464 1220,488 1222,492 1222,495 1224,497 1223,498 1237,543 1237,547 1236,548 1237,549 1265,553 1266,554 1270,554 1271,553 1272,555 1289,557 1295,559 1326,559 1327,548 1328,547 1397,547 1398,546 1405,546 1407,520 1405,516 1403,515 1404,514 1401,508 1397,504 1398,503 1393,493 1388,486 1387,482 1385,481 1386,480 1367,446 1360,431 1356,427 1357,425 1351,416 1349,410 1345,406 1346,405 1343,401 1341,395 1337,391 1338,390 1326,369 1325,357 1322,353 1266,353 1264,347 1253,347 1252,348 1208,348 1207,349 1206,348"
                />
                <text className="lh-zone-label" x="1282" y="500">8</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '9' ? 'lh-zone-selected' : ''}`}
                  data-house-id="9"
                  onClick={() => onSelectHouse && onSelectHouse('9')}
                  points="1519,351 1509,351 1508,350 1506,351 1504,347 1501,345 1431,348 1432,353 1434,355 1424,362 1423,361 1415,366 1398,364 1395,362 1395,360 1393,359 1391,354 1326,354 1325,353 1328,356 1329,368 1333,372 1332,373 1336,379 1338,385 1388,477 1389,481 1392,483 1391,484 1394,487 1393,488 1395,489 1394,490 1410,519 1408,546 1557,545 1552,540 1540,531 1539,532 1536,528 1521,517 1529,498 1517,474 1518,469 1517,468 1519,466 1519,462 1525,444 1524,442 1526,440 1529,429 1528,428 1531,421 1530,419 1532,418 1533,414 1532,413 1534,411 1535,406 1531,400 1526,397 1528,396 1524,390"
                />
                <text className="lh-zone-label" x="1432" y="500">9</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '10' ? 'lh-zone-selected' : ''}`}
                  data-house-id="10"
                  onClick={() => onSelectHouse && onSelectHouse('10')}
                  points="1506,345 1509,348 1510,347 1511,348 1520,348 1522,350 1527,389 1528,392 1533,397 1538,405 1534,423 1527,445 1528,446 1525,452 1524,459 1520,471 1521,476 1524,480 1525,484 1532,497 1531,503 1528,508 1525,517 1529,519 1561,544 1565,544 1566,545 1571,545 1572,544 1575,546 1587,546 1588,547 1617,551 1620,553 1622,559 1689,559 1690,558 1700,558 1701,557 1700,556 1703,553 1709,537 1707,536 1708,535 1695,504 1692,501 1693,500 1692,497 1689,494 1690,492 1679,468 1678,463 1676,462 1677,461 1673,453 1672,448 1668,441 1668,438 1665,433 1662,423 1660,422 1661,421 1657,413 1656,408 1647,390 1642,377 1616,361 1615,362 1610,359 1596,356 1594,354 1593,350 1567,350 1557,343 1553,343 1552,344 1551,343 1539,343 1538,344"
                />
                <text className="lh-zone-label" x="1572" y="500">10</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '11' ? 'lh-zone-selected' : ''}`}
                  data-house-id="11"
                  onClick={() => onSelectHouse && onSelectHouse('11')}
                  points="12,589 25,627 70,659 487,717 1080,712 1081,686 1067,551 901,554 763,550 761,536 506,537 482,544 480,552 410,550 379,600 166,602 115,500 101,511 106,534 73,562 62,546 28,569"
                />
                <text className="lh-zone-label" x="520" y="650">11</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '12' ? 'lh-zone-selected' : ''}`}
                  data-house-id="12"
                  onClick={() => onSelectHouse && onSelectHouse('12')}
                  points="1807,671 1775,631 1762,652 1727,601 1737,580 1711,541 1701,562 1620,562 1617,554 1574,548 1330,550 1328,562 1296,562 1233,551 1070,550 1081,674 1084,684 1083,712 1279,702 1375,716 1775,706 1794,704 1805,691"
                />
                <text className="lh-zone-label" x="1450" y="670">12</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmbeddedSitePreviewTest

