"""
This file is used to parse through the data given and turn it into a readable format
"""

import argparse
import csv
import json
from collections import defaultdict

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('input_file', type=str,
                    help='The input csv to read data from')
parser.add_argument('all_output_file', type=str,
                    help='The all vehicle data output file to export')
parser.add_argument('make_model_output_file', type=str,
                    help='The make and model output file to export json')
parser.add_argument('model_year_output_file', type=str,
                    help='The model and year output file to export json')

# Class used to turn a set into a list
class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, set):
            return list(obj)
        return json.JSONEncoder.default(self, obj)


def main():
    args = vars(parser.parse_args())

    input_file = args['input_file']
    all_output_file = args['all_output_file']
    make_model_output_file = args['make_model_output_file']
    model_year_output_file = args['model_year_output_file']

    nested_dict = lambda: defaultdict(nested_dict)
    vehicle_dict = nested_dict()
    vehicle_list = []
    make_list = set()
    make_model_list = set()    

    with open(input_file, "rt", encoding='ascii') as infile:
        read = csv.DictReader(infile)
        count = 0
        for vehicle in map(dict, read):
            # print(vehicle)
            vehicle_dict[vehicle['make']][vehicle['model']][vehicle['year']] = vehicle
            vehicle_list.append({"_id": str(count), **vehicle})
            make_list.add(vehicle['make'])
            # make_model_list.add({"make": vehicle['make'], "model": vehicle['model']})
            count += 1

    with open(all_output_file, 'w') as fp:
        json.dump(vehicle_list, fp, cls=SetEncoder)

    with open(make_model_output_file, 'w') as fp:
        json.dump(make_list, fp, cls=SetEncoder)

    with open(model_year_output_file, 'w') as fp:
        json.dump(make_model_list, fp, cls=SetEncoder)


if __name__ == "__main__":
    main()


