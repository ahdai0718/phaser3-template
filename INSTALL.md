# Environment Prepare

# Install Brew(apple 套件管理)
- 終端機 輸入 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- 輸入本機密碼
- 按 Enter(return)
# Install git
    - 終端機 輸入 brew install git

# 建立SSH

- 終端機
    - 輸入=> ssh-keygen (產出./.ssh/id_rsa.pub)
    - 輸入=> open ~/.ssh
        - 打開 id_rsa.pub
        - 複製內容
- 進入AWS->IAM->我的存取金鑰->AWS CodeCommit 登入資料->上傳SSH 公有金鑰 => 把剛剛複製的內容貼到這邊 => 上傳SSH公有金鑰
- 複製剛剛的SSH 金鑰 ID
- 回到剛剛./ssh資料夾
- 新增一個config文字檔
    - 複製下面這段,並把剛剛複製的SSH 金鑰 ID 貼到下面 User後面
    - Host git-codecommit.*.amazonaws.com
 HostName git-codecommit.ap-northeast-1.amazonaws.com
   User `SSH 金鑰ID`
   IdentityFile ~/.ssh/id_rsa
    - 複製上面那段貼到config,儲存
- 終端機
    - 輸入 chmod 600 ~/.ssh/config (改權限)
    - 輸入 ssh git-codecommit.ap-northeast-1.amazonaws.com(透過sssh連線到AWS)