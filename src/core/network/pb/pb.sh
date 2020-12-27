../../../../node_modules/protobufjs/bin/pbjs -p ./game  -t static-module -w commonjs -o proto.js *.proto
# ../../../../node_modules/protobufjs/bin/pbjs -p ./game/chinese_poker_13 -t static-module -w commonjs -o proto.js *.proto
../../../../node_modules/protobufjs/bin/pbts -o proto.d.ts proto.js