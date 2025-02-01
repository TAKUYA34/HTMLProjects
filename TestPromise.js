// 非同期処理をPromiseオブジェクトでラップ
const asyncFunctionPromise = () => {
  return new Promise((resolve, reject) => {
    // 1秒後に成功を返す
    setTimeout(
      () => resolve(),
      1000
    );
  });
};

// 最初の非同期処理の呼び出し
asyncFunctionPromise()
  .then((result) => {
    console.log('最初の非同期処理が完了しました');

    // 2つ目の非同期処理の呼び出し
    return asyncFunctionPromise();
  })
  .then((result) => {
    console.log('2つ目の非同期処理が完了しました');

    // 3つ目の非同期処理の呼び出し
    return asyncFunctionPromise();
  })
  .then((result) => {
    console.log('3つ目の非同期処理が完了しました');
    console.log('すべての非同期処理が完了しました');
  })
  .catch((e) => console.error(e));