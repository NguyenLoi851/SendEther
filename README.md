# SendEther

Project from Youtube: https://www.youtube.com/watch?v=Wn_Kb3MR_cU

Tools, frameworks:
1. Vate (for React)
2. Tailwindcss (for CSS)
3. Hardhat, Alchemy, Mocha, Waffle, chai (for smart contract)

Steps to make this project:
1. mkdir client && mkdir smart_contract
2. cd client
3. npm init vite@latest 

3.1. Project name: ./

3.2. Package name: (whatever you like)

3.3. Other: react

4. npm install
5. npm run dev
(Open http://localhost:3000/ to see front-end)
6. npm install -D tailwindcss postcss autoprefixer
(use tailwindcss for css, link setup: https://tailwindcss.com/docs/guides/create-react-app)
7. npx tailwindcss init -p
8. Change content of some file like instruction in above website

9. cd .. && cd smart_contract
10. npm init -y

(Complete init install)

11. Code for client
12. npm install react-icons ethers 
13. create components

14. Code for smart-contract
15. npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

16. npx hardhat
17. Write contract in folder contract
18. Test contract 
(**Bug**: declare variances before beforeEach() function)
19. Rename file scripts/sample-script.js to scripts/deploy.js and change content
20. Set up with Alchemy, copy http key
21. Config file hardhat.config.js (create file .secret)
(**Bug**: not put private key(32 bytes) in .secret file in ' ' or " ")
22. Compile contract: npx hardhat run scripts/deploy.js --network ropsten
23. Copy address of contract and paste to file utils/constants.js
24. Copy file abi to client/utils
25. Write Context folder
