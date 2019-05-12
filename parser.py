"""
This file is used to parse through the data given and turn it into a another format(JSON, etc)
"""

import argparse
import csv
import json
from collections import defaultdict

parser = argparse.ArgumentParser(description="Process some integers.")
parser.add_argument("input_file", type=str, help="The input csv to read data from")
parser.add_argument(
    "all_output_file", type=str, help="The all vehicle data output file in json form"
)
parser.add_argument(
    "make_output_file", type=str, help="The json file containing all car makes"
)

# Class used to turn a set into a list
class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, set):
            return list(obj)
        return json.JSONEncoder.default(self, obj)


def main():
    args = vars(parser.parse_args())

    input_file = args["input_file"]
    all_output_file = args["all_output_file"]
    make_output_file = args["make_output_file"]

    vehicle_list = []
    make_list = set()

    with open(input_file, "rt", encoding="ascii") as infile:
        read = csv.DictReader(infile)
        count = 0
        for vehicle in map(dict, read):
            sifted_vehicle_data = {"_id": str(count)}
            for k, v in vehicle.items():
                if not (v is None or v == "0" or v == "-1" or v == "0.0" or v == ""):
                    sifted_vehicle_data[k] = v
            vehicle_list.append(sifted_vehicle_data)
            make_list.add(vehicle["make"])
            count += 1

    with open(all_output_file, "w") as fp:
        json.dump(vehicle_list, fp, cls=SetEncoder)

    with open(make_output_file, "w") as fp:
        json.dump(sorted([*make_list]), fp, cls=SetEncoder)


if __name__ == "__main__":
    main()

