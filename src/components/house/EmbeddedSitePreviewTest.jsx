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
                  points="735,534 760,534 764,549 903,546 910,352 850,352 844,358 833,357 833,368 777,370"
                />
                <text className="lh-zone-label" x="812" y="500">5</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '6' ? 'lh-zone-selected' : ''}`}
                  data-house-id="6"
                  onClick={() => onSelectHouse && onSelectHouse('6')}
                  points="903,546 1069,542 1053,368 986,368 980,357 975,357 974,350 910,352"
                />
                <text className="lh-zone-label" x="962" y="500">6</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '7' ? 'lh-zone-selected' : ''}`}
                  data-house-id="7"
                  onClick={() => onSelectHouse && onSelectHouse('7')}
                  points="1069,542 1239,543 1240,522 1222,469 1222,458 1218,448 1220,411 1218,394 1210,348 1134,349 1124,366 1053,368"
                />
                <text className="lh-zone-label" x="1122" y="500">7</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '8' ? 'lh-zone-selected' : ''}`}
                  data-house-id="8"
                  onClick={() => onSelectHouse && onSelectHouse('8')}
                  points="1239,543 1240,522 1222,469 1222,458 1218,448 1220,411 1218,394 1210,348 1285,346 1284,364 1332,364 1404,521 1406,538"
                />
                <text className="lh-zone-label" x="1282" y="500">8</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '9' ? 'lh-zone-selected' : ''}`}
                  data-house-id="9"
                  onClick={() => onSelectHouse && onSelectHouse('9')}
                  points="1406,548 1567,547 1517,470 1537,405 1530,391 1514,352 1514,343 1427,343 1427,355 1414,366 1396,365 1332,364 1404,521 1406,538"
                />
                <text className="lh-zone-label" x="1432" y="500">9</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '10' ? 'lh-zone-selected' : ''}`}
                  data-house-id="10"
                  onClick={() => onSelectHouse && onSelectHouse('10')}
                  points="1567,547 1586,548 1621,555 1702,554 1714,542 1651,397 1644,383 1625,368 1608,363 1598,362 1595,349 1567,347 1567,343 1514,343 1514,352 1530,391 1537,405 1517,470"
                />
                <text className="lh-zone-label" x="1572" y="500">10</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '11' ? 'lh-zone-selected' : ''}`}
                  data-house-id="11"
                  onClick={() => onSelectHouse && onSelectHouse('11')}
                  points="487,720 1087,707 1069,542 903,546 764,549 760,534 735,534 576,536 409,540 377,596 250,596 166,597 119,495 13,584 19,619 67,656"
                />
                <text className="lh-zone-label" x="520" y="650">11</text>
              </g>
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${selectedHouseId === '12' ? 'lh-zone-selected' : ''}`}
                  data-house-id="12"
                  onClick={() => onSelectHouse && onSelectHouse('12')}
                  points="1087,707 1264,702 1367,717 1792,705 1804,693 1807,673 1725,564 1714,542 1702,554 1621,555 1586,548 1567,547 1406,548 1406,538 1239,543 1069,542"
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

