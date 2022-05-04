# SendEther

Project from Youtube: https://www.youtube.com/watch?v=Wn_Kb3MR_cU

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
11. npm install react-icons ethers 
12. create components

13. Code for smart-contract
14. npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

15. npx hardhat
16. Write contract in folder contract
17. Test contract
18. Rename file scripts/sample-script.js to scripts/deploy.js and change content
19. Set up with Alchemy, copy http key
20. Config file hardhat.config.js
21. Compile contract: npx hardhat run scripts/deploy.js --network ropsten
22. Copy address of contract and paste to file utils/constants.js
23. Copy file abi to client/utils
24. Write Context folder