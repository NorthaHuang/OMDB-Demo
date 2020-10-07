# SparkAmplify Coding Challenge

## Initialization

若剛下載完，請先於 Terminal/CMD 執行 `yarn install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## App Q&A

#### **"How did you decide which technologies to use as part of your solution?"**

我有幾個選取的參考條件:

1. 熟悉程度；環境運許的話，就選擇有較多實戰經驗的技術。
2. 源碼是否成熟穩定;選擇有經過多人使用及驗證，Issues 有使用者提報和處理問題的源碼。
3. 作業時間長短;時間短就取最熟悉或易上手的，反之時間夠多的話，可以考慮選擇 "有使用過數次" 但沒有到特別熟的技術來使用。

#### **"Are there any improvements you could make to your submission?"**

還有好多地方可以加強，但最首要目標就是做出 "最小可行性產品 (Minimum Viable Product)"；
目前大概有以下多點可以再更進步:

1. **style**: 排版細節增加、Loading 淡出淡入以及使用者互動的動態部分加入。
2. **search-result list**: 圖片可以統一高度，並且設置底圖(因為蠻多 item 並沒有圖片)。
3. **search-result pagination**: 希望可以讓當前頁面都處於正中間，如果頁面過多可以用 "..." 來表示。
4. **search-result pagination**: 這個 component 可以改用 Props 傳遞資訊，使該 component 可以降低多一點的耦合度來增加複用性。
5. **Homepage**: 的表單增加驗證機制以及紅字的錯誤提醒。

#### **"What would you do differently if you were allocated more time?"**

1. 時間夠多的話我就會加入 ESLint (Airbnb) 來做 coding style 的自動驗證。
2. 會花更多時間在寫註解上，不然可能下個月我自己本人回來看也會很吃力。
3. Git-Flow 的每個 branch 和 commit 會更精確地去決定要寫什麼文字、在何時提交。
4. 畫設計流程來大致計畫每一步該如何走。
