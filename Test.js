// callbackサンプルファイル

// 非同期処理の模擬する関数
const asyncSample = (callback) => {
  // 1秒後にコールバックを実行
  setTimeout(
    () => callback(),
    1000
  );S
};

// 非同期処理の呼び出し
asyncSample(() => {
  console.log("最初の非同期処理が完了しました。");

  // 関数内で2つ目の非同期処理の呼び出し
  asyncSample(() => {
    console.log("2つ目の非同期処理が完了しました。");

    // 2つ目の関数内で3つ目の非同期処理の呼び出し
    asyncSample(() => {
      console.log("3つ目の非同期処理が完了しました。");

      // 最後の処理
      console.log("すべての非同期処理が完了しました。");
    });
  });
});