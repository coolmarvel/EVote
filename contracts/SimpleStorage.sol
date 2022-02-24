// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

// 간단한 컨트랙트
contract SimpleStorage {
  uint storedData; // 저장데이터

  // 실제 데이터를 저장하는 함수
  function set(uint x) public {
    storedData = x;
  }

  // 해당 저장소에서 데이터를 가져오는 기능 생성.
  function get() public view returns (uint) {
    return storedData;
  }
}
